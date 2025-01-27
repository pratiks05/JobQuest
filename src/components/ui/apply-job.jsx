/* eslint-disable react/prop-types */
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
import { Button } from "./button"
import { Input } from "./input";
import { RadioGroup, RadioGroupItem } from "./radio-group";
import { Label } from "@radix-ui/react-label";
  

const ApplyJobDrawer = ({user,job,applied=false,fetchJob}) => {
  return (
    <Drawer open={applied ? false :undefined}>
  <DrawerTrigger asChild>
    <Button size="lg" variant={job?.isOpen && !applied ? "blue":"destructive"}
    disabled={!job?.isOpen || applied }>
      {job?.isOpen ? (applied ? "Applied" :"Apply"):"Hiring closed"}
    </Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Apply for {job?.title} at {job?.company?.name}</DrawerTitle>
      <DrawerDescription>Please Fill the Form below-</DrawerDescription>
    </DrawerHeader>

    <form className="flex flex-col gap-4 p-4 pb-0">
      <Input
        type="number"
        placeholder="Years Of Experience"
        className="flex-1"
      />

      <Input
        type="text"
        placeholder="Skills(comma separated)"
        className="flex-1"
      />
      <RadioGroup defaultValue="option-one">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Intermediate" id="intermediate" />
            <Label htmlFor="intermediate">Intermediate</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Graduate" id="graduate" />
            <Label htmlFor="graduate">Graduate</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Post Graduate" id="post-graduate" />
            <Label htmlFor="post-graduate">Post Graduate</Label>
          </div>
      </RadioGroup>
      <Input
        type="file"
        accept=".pdf,.doc,.docx"
        className="flex file:text-gray-500"
      />
      <Button type="submit" variant="blue" size="lg">
        Apply
      </Button>



    </form>



    <DrawerFooter>
      <DrawerClose asChild>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>

  )
}

export default ApplyJobDrawer
