import React, { forwardRef, LegacyRef, MutableRefObject, useRef } from 'react';
import { ReactComponent as LogoSVG } from './../../../Assets/logoFull.svg';
// import { Button, TextField, Checkbox, Form } from 'react-aria-components';
import { Button, Form, TextField, Input, Label } from "../../../Components/Base/"
import { useForm, ValidationError } from '@formspree/react';


type FirstSectionProps = {
  
}
export const BottomSection: React.FC<FirstSectionProps & React.RefAttributes<HTMLDivElement>> = forwardRef<HTMLDivElement>((props, ref) => {
  const [state, handleSubmit] = useForm("xeqynvqq");

  return (
    <div className='bg-primary-700 p-4'>
      <div className="container mx-auto p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <h2>
            Ready to offer a premium over-the-phone experience that your patients deserve?
          </h2>
          {/* Sign-up Form */}
            <div  ref={ref} className="bg-tertiary-50 border-2 rounded-xl shadow-md p-10 grid gap-8 max-w-[550px] justify-center text-black">
                {state?.succeeded ?  <h2> Thanks for reaching out. <br/> <br/> ✉️ 🎉 <br/> <br/> We promise to get back to you within 24 hours!</h2>: (<><h2 className='text-4xl text-center'> Sign up for a live demo</h2>
                <Form className='gap-4 justify-center' onSubmit={handleSubmit}> 
                  <TextField label='What is your name?' id="name" name="name" type='text'/>
                  <TextField label='Best phone number to reach you?' id="phone" name="phone" type='tel' isRequired errorMessage="We need your number" description="We won't send unwanted texts or calls!"/>
                  <TextField label='What is the name of your clinic?' id="clinic name" name="clinic name" type='text'/>
                  <TextField label='Where are you located?' id="location" name="location" type='text'/>
                  <Button type='submit' isDisabled={state.submitting} variant='primary' className={"mt-6"}>Submit</Button>
                </Form></>)
                }
              </div>
        </div>
      </div>
    </div>
  );
});