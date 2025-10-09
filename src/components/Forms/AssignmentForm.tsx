"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import InputField from "../InputField";

const schema = z.object({
  subject: z.string().min(1, { message: "className is required!" }),
  class: z.string().min(1, { message: "capacity is required!" }),
  teacher: z.string().min(1, { message: "grade is required!" }),
  date: z.string().min(1, { message: "Date is required!" }),
});

type Inputs = z.infer<typeof schema>;
const AssignmentForm = ({
  type,
  data,
}: {
  type: "create" | "update";
  data?: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">Create a new Assignment</h1>
      <span className="text-xs text-gray-400 font-medium">
        Assignment Information
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Subject Name"
          name="subject"
          defaultValue={data?.subject}
          register={register}
          error={errors.subject}
        />
        <InputField
          label="Class"
          name="class"
          type="text"
            defaultValue={data?.class}
          register={register}
          error={errors.class}
        />
         <InputField
          label="Date"
          name="date"
          defaultValue={data?.date}
          register={register}
          error={errors.date}
          type="date"
        />
      </div>
      <button className="bg-blue-400 text-white p-2 rounded-md">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default AssignmentForm;
