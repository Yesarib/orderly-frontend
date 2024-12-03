import { Button, Checkbox, Input, Typography } from "@material-tailwind/react"

const SignIn = () => {
    return (
        <section className="flex gap-4">
            <div className="w-full flex flex-col items-center justify-center lg:w-3/5 mt-24">
                <div className="lg:w-2/3 flex flex-col justify-center items-center">
                    <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
                        <div className="text-start">
                            <Typography variant="h3" className="font-bold ">Orderly'e Hoşgeldiniz</Typography>
                            <Typography variant="paragraph" className="text-md text-gray-700 font-normal">Lütfen üyelik bilgileriniz ile giriş yapınız</Typography>
                        </div>
                        <div className="mb-1 flex flex-col gap-6 lg:mt-8">
                            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
                                E-Posta Adresi veya Telefon Numarası
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="e-posta@mail.com | 5552223344"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }} crossOrigin={undefined} />
                            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
                                Şifre
                            </Typography>
                            <Input
                                type="password"
                                size="lg"
                                placeholder="********"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }} crossOrigin={undefined} />
                        </div>
                        <div className="flex items-center justify-between gap-2 mt-6">
                            <Checkbox
                                label={<Typography
                                    variant="small"
                                    color="gray"
                                    className="flex items-center justify-start font-medium"
                                >
                                    Beni Hatırla
                                </Typography>}
                                containerProps={{ className: "-ml-2.5" }} crossOrigin={undefined} />
                            <Typography variant="small" className="font-medium text-gray-900">
                                <a href="#" className="underline">
                                    Şifremi Unuttum?
                                </a>
                            </Typography>
                        </div>
                        <Button className="mt-6 capitalize p-3 text-lg rounded-2xl bg-blue-700" fullWidth>
                            Giriş Yap
                        </Button>
                    </form>
                </div>
            </div>
            <div className="w-2/5 min-h-screen hidden lg:flex">
                <img
                    src="https://www.shutterstock.com/shutterstock/photos/1091505905/display_1500/stock-vector-people-in-street-cafe-vector-cartoon-illustration-couple-sitting-at-the-table-and-drinking-coffee-1091505905.jpg"
                    className="h-full w-full object-cover"
                />
            </div>

        </section>

    )
}

export default SignIn