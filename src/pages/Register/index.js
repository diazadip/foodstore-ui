import * as React from 'react';
import {
    LayoutOne, Card, FormControl, InputText, InputPassword,
    Button
} from 'upkit';
// (1) import useForm
import { useForm } from 'react-hook-form';
import { rules } from './validation';

export default function Register() {
    // (2) keluarkan fungsi yang diperlukan dari useForm
    const { register, formState: { errors }, handleSubmit } = useForm({
        criteriaMode:"all"
      });

    const onSubmit = data => console.log(data);
       
    return (
        <LayoutOne size="small">
            <Card color="white">
                {/* (4) gunakan onSubmit dengan terlebih dahulu dimasukan dalam handleSubmit */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* gunakan ref={register} */}
                    <FormControl errorMessage={errors.validation_fullname?.message}>
                        <InputText
                            name="full_name"
                            placeholder="Nama Lengkap"
                            fitContainer
                            {...register("validation_fullname", rules.full_name)}
                        />
                    </FormControl>
                    
                    {/* gunakan ref={register} */}
                    <FormControl errorMessage={errors.validation_email?.message}>
                        <InputText
                            name="email"
                            placeholder="Email"
                            fitContainer
                            {...register("validation_email", rules.email)}
                        />
                    </FormControl>
                    {/* gunakan ref={register} */}
                    <FormControl errorMessage={errors.validation_password?.message}>
                        <InputPassword
                            name="password"
                            placeholder="Password"
                            fitContainer
                            {...register("validation_password", rules.password)}
                        />
                    </FormControl>
                    {/* gunakan ref={register} */}
                    <FormControl errorMessage={errors.validation_confirmation_password?.message}>
                        <InputPassword
                            name="password_confirmation"
                            placeholder="Konfirmasi Password"
                            fitContainer
                            {...register("validation_confirmation_password", rules.password_confirmation)}
                        />
                    </FormControl>
                    <Button
                        size="large"
                        fitContainer
                    > Mendaftar </Button>
                </form>
            </Card>
        </LayoutOne>
    )
}
