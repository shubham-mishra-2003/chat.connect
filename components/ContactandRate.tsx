import { useUser } from "@clerk/nextjs";
import { Star } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger
} from "./ui/dialog";

const ContactandRate = ({ formType }: { formType: string }) => {
  const { user } = useUser();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState(0);

  async function handleContactSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(event.currentTarget);

    formData.append("fullName", user?.fullName ?? "Anonymous");
    formData.append("username", user?.username ?? "No username");

    formData.append("access_key", "dc0fcde6-abe2-4d54-a495-cab6e0313fe1");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const result = await response.json();
      if (result.success) {
        toast.success("Thank you We will get back to you shortly.");
        setIsOpen(false);
      } else {
        toast.error("Error submitting contact form:", result);
      }
    } catch (error) {
      toast.error(`Unexpected error occured, ${error}`);
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleRatingSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(event.currentTarget);

    formData.append("fullName", user?.fullName ?? "Anonymous");
    formData.append("username", user?.username ?? "No username");

    formData.append("access_key", "dc0fcde6-abe2-4d54-a495-cab6e0313fe1");
    formData.append("rating", rating.toString());

    try {
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const result = await response.json();
      if (result.success) {
        toast.success("Thank you for your rating!");
        setRating(0);
        setIsOpen(false);
      } else {
        toast.error("Error submitting rating:", result);
      }
    } catch (error) {
      toast.error(`Unexpected error occured, ${error}`);
    } finally {
      setIsSubmitting(false);
    }
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger
        onClick={() => setIsOpen(true)}
        className="text-green-600 dark:text-green-400 text-lg w-fit cursor-pointer"
      >
        {formType == "contact" && "Contact Us"}
        {formType == "feedback" && "Rate Us"}
      </DialogTrigger>
      <DialogContent className="modal-box dark:bg-slate-900 bg-slate-300 text-slate-600 dark:text-slate-300">
        <DialogTitle className="text-3xl">
          {formType == "contact" && "Contact Us"}
          {formType == "feedback" && "Rate Us"}
        </DialogTitle>
        <DialogDescription>
          <div>
            {formType == "contact" && (
              <div className="flex flex-col gap-2 w-full">
                <form
                  onSubmit={handleContactSubmit}
                  className="size-full flex flex-col gap-2"
                >
                  <label className="hidden text-xl gap-1 justify-center flex-col w-full">
                    Your Name
                    <input
                      disabled
                      type="text"
                      className="bg-slate-100 p-2 rounded-lg dark:bg-slate-700 focus-visible:outline focus-visible:outline-green-500 text-lg"
                      name="name"
                      defaultValue={user?.fullName ?? ""}
                    />
                  </label>
                  <label className="hidden text-xl gap-1 justify-center flex-col w-full">
                    Your Username
                    <input
                      disabled
                      className="bg-slate-100 p-2 rounded-lg dark:bg-slate-700 focus-visible:outline focus-visible:outline-green-500 text-lg"
                      type="text"
                      name="email"
                      defaultValue={user?.username ?? ""}
                    />
                  </label>
                  <label className="flex text-xl gap-1 justify-center flex-col w-full">
                    Message
                    <textarea
                      rows={4}
                      placeholder="Let us know how we can help you"
                      className="bg-slate-100 p-2 resize-none rounded-lg dark:bg-slate-700 focus-visible:outline focus-visible:outline-green-500 text-lg"
                      name="message"
                    />
                  </label>
                  <button
                    type="submit"
                    className="w-full p-2 text-lg rounded-lg bg-green-600 text-white dark:bg-green-400 dark:text-black"
                  >
                    {isSubmitting ? "Sending" : "Send"}
                  </button>
                </form>
                <span className="text-xl">
                  By clicking Send, you acknowledge connect may review the
                  metadata associated with your account, to troubleshoot and
                  solve the reported issue.
                </span>
              </div>
            )}
            {formType == "feedback" && (
              <form
                onSubmit={handleRatingSubmit}
                className="size-full flex flex-col gap-2"
              >
                <label className="hidden text-xl gap-1 justify-center flex-col w-full">
                  Your Name
                  <input
                    disabled
                    type="text"
                    className="bg-slate-100 p-2 rounded-lg dark:bg-slate-700 focus-visible:outline focus-visible:outline-green-500 text-lg"
                    name="name"
                    defaultValue={user?.fullName ?? ""}
                  />
                </label>
                <label className="hidden text-xl gap-1 justify-center flex-col w-full">
                  Your Username
                  <input
                    disabled
                    className="bg-slate-100 p-2 rounded-lg dark:bg-slate-700 focus-visible:outline focus-visible:outline-green-500 text-lg"
                    type="text"
                    name="email"
                    defaultValue={user?.username ?? ""}
                  />
                </label>
                <label className="text-xl gap-1 justify-center flex-col w-full">
                  Your Rating
                  <div className="flex w-full justify-center items-center gap-5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        fill={star <= rating ? "yellow" : ""}
                        className={`cursor-pointer text-2xl ${
                          star <= rating ? "text-yellow-500" : "text-gray-400"
                        }`}
                        onClick={() => setRating(star)}
                      />
                    ))}
                  </div>
                  <input type="hidden" name="rating" value={rating} />
                </label>
                <button
                  type="submit"
                  className="w-full text-lg mt-2 p-2 rounded-lg bg-green-600 text-white dark:bg-green-400 dark:text-black"
                >
                  {isSubmitting ? "Submitting" : "Submit Rating"}
                </button>
              </form>
            )}
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default ContactandRate;
