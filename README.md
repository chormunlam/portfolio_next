for third party:
npm i --save-dev @types/react-vertical-timeline-component

// action={(formData)=>{
    cosole.log(fromData)
}}

        //server action.
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}


use resend libray to send email


https://react.email/docs/integrations/resend to sytle the email hahahahha.  npm i @react-email/components @react-email/tailw
ind



  const {pending}=experimental_useFormStatus(); //from next



  for the 3rd party libray like the experience time line, we need another way to modfy css for dark mode