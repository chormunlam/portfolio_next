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