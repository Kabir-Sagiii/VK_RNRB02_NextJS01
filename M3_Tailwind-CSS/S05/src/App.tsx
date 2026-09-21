import { Button } from "@/components/ui/button"
import {User,DatabaseMinus,BellDot} from "lucide-react"
import Login from "./components/login/Login"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
function App() {
  return (
    <Tabs defaultValue="overview">
      <TabsList variant="line">
        <TabsTrigger value="html">HTML</TabsTrigger>
        <TabsTrigger value="css">CSS</TabsTrigger>
        <TabsTrigger value="js">JS</TabsTrigger>
      </TabsList>
      <TabsContent value="html">HTML is markup language</TabsContent>
      <TabsContent value="css">CSS is styling language</TabsContent>
      <TabsContent value="js">JS is programming language</TabsContent>
    </Tabs>
//     <Drawer  swipeDirection="up">
//   <DrawerTrigger render={<Button variant="outline" />}>Open</DrawerTrigger>
//   <DrawerContent>
//     <DrawerHeader>
//       <DrawerTitle>Are you absolutely sure?</DrawerTitle>
//       <DrawerDescription>This action cannot be undone.</DrawerDescription>
//     </DrawerHeader>
//     <div className="p-4">{/* Content here */}</div>
//     <DrawerFooter>
//       <Button>Submit</Button>
//       <DrawerClose render={<Button variant="outline" />}>Cancel</DrawerClose>
//     </DrawerFooter>
//   </DrawerContent>
// </Drawer>
      // <Button variant="link">
      //   <User />
      //   <DatabaseMinus size={56} strokeWidth={1.75} />
      //   <DatabaseMinus size={56} strokeWidth={1.75} />
      //   <BellDot size={56} strokeWidth={1.75} />
      //   Click me</Button>
  // <div>
  //   <Login />
  // </div>
  )
}

export default App