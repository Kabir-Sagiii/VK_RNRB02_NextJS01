import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@base-ui/react"

function Login() {
  return (
    <div className="m-20 bg-green-800 w-20 text-center text-white py-2 px-5">
        <Dialog>
            <DialogTrigger>Login</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>User Login </DialogTitle>
                    <DialogDescription>
                       <div className="my-3">
                        <Input />
                       </div>
                       <div className="my-3">
                        <Input />
                       </div>
                       <div>
                        <Button>Login</Button>
                       </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    </div>
  )
}

export default Login