import Image from "next/image";
import FormImage from "@/public/FormImage.png";
import ParallaxContainer from "@/components/ParallaxContainer";
import Input from "@/components/Input";
import Checkbox from "@/components/Checkbox";
import Form from "next/form";
import Select from "@/components/Select";
import Label from "@/components/Label";
import Link from "next/link";
import * as motion from "motion/react-client";
import { NavigateSVG } from "@/components/Icons";

export default function FormSection() {
  const categories = [
    "Resorts and Residences",
    "Retreats",
    "Wellness",
    "New Developments",
    "Building Innovation",
  ];

  return (
    <div className="flex flex-col bg-[#E8F5E9] text-[#0F1E16] md:grid md:grid-cols-2">
      <ParallaxContainer parallaxAmount={20}>
        <Image src={FormImage} alt="form-image" className="h-auto w-full" />
      </ParallaxContainer>
      <div className="col-start-2 flex flex-col items-center justify-center">
        <Form action={""} className="w-full max-w-102 px-5 py-24 md:p-0">
          <div className="w-full text-xl font-light md:text-30">
            Take the First step
          </div>
          <div className="mt-8 mb-10 text-base md:text-lg">
            Become a member of ELEMENTIS Club and take the first step towards a
            life filled with purpose, Wellness, and connection
          </div>
          <div className="flex flex-col gap-4">
            <Label label="Full Name">
              <Input type="text" placeholder="Enter your name" />
            </Label>
            <Label label="Email Address">
              <Input type="email" placeholder="Enter your email address" />
            </Label>
            <Label label="Phone number">
              <div className="flex -space-x-4 md:-space-x-6">
                <Select options="dial code" />
                <Input type="tel" placeholder="Enter your phone number" />
              </div>
            </Label>
            <Label label="Country">
              <Select options="countries" />
            </Label>
          </div>
          <div className="mt-10 space-y-5 text-sm text-[#0F1E16] md:text-base">
            <p>I would like to receive information on ELEMENTIS.</p>
            <div className="flex flex-wrap gap-4">
              {categories.map((category) => (
                <Checkbox key={category}>{category}</Checkbox>
              ))}
            </div>
          </div>
          <Checkbox className="mt-8-75" required={true}>
            I agree to the{" "}
            <Link href="#" className="underline-[#0F1E16] underline">
              Policies and Terms
            </Link>
          </Checkbox>
          <motion.button
            type="submit"
            className="mt-14 flex w-full cursor-pointer items-center justify-between px-6 py-5 text-base text-white md:text-lg"
            initial={{ backgroundColor: "#0F1E16" }}
            whileHover={{ backgroundColor: "#2E7D32" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <span>Sign up</span>
            <NavigateSVG fill="#A5D6A7" />
          </motion.button>
        </Form>
      </div>
    </div>
  );
}
