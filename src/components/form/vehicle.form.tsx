import { useForm, SubmitHandler } from "react-hook-form";
import { IVehicle } from "types/vehicle.type";
import { PrimaryButton } from "components/button";
import { TextInput, DateInput, SingleSelect } from "components/input";

type PropsTypes = {
  data: IVehicle | null;
  loading: boolean;
  onSubmit: (data: any) => void;
};

export const VehicleForm: React.FC<PropsTypes> = (
  props: PropsTypes
): JSX.Element => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IVehicle>();

  /* Handle form submit */
  const onSubmit: SubmitHandler<IVehicle> = (data: IVehicle) => {
    const formData = {
      ...data,
      vehicle_type: data.vehicle_type,
      status: data.status,
    };
    props.onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6">
        {/* license number input control */}
        <div className="mb-6 lg:mb-2">
          <TextInput
            label="license number"
            name="license_number"
            type="text"
            placeholder="Enter license number"
            control={control}
            error={errors.license_number && errors.license_number.message}
            defaultvalue={props.data?.license_number || ""}
            rules={{ required: "License number is required" }}
          />
        </div>

        {/* Vehicle type select control */}
        <div className="mb-6 lg:mb-2">
          <SingleSelect
            label="Vehicle type"
            name="vehicle_type"
            control={control}
            error={errors.vehicle_type && errors.vehicle_type.message}
            defaultvalue={
              props.data
                ? {
                    label: props.data.vehicle_type,
                    value: props.data.vehicle_type,
                  }
                : null
            }
            options={[
              { label: "Microbus", value: "Microbus" },
              { label: "Car", value: "Car" },
              { label: "Truck", value: "Truck" },
            ]}
            isClearable={true}
            placeholder="Select vehicle type"
            rules={{ required: "Vehicle type is required" }}
          />
        </div>

        {/* Owner name input control */}
        <div className="mb-6 lg:mb-2">
          <TextInput
            label="Vehicle owner name"
            name="owner_name"
            type="text"
            placeholder="Enter owner name"
            control={control}
            error={errors.owner_name && errors.owner_name.message}
            defaultvalue={props.data?.owner_name || ""}
            rules={{ required: "Owner name is required" }}
          />
        </div>

        {/* Owner phone input control */}
        <div className="mb-6 lg:mb-2">
          <TextInput
            label="Vehicle owner phone"
            name="owner_phone"
            type="text"
            placeholder="Enter owner phone"
            control={control}
            error={errors.owner_phone && errors.owner_phone.message}
            defaultvalue={props.data?.owner_phone || ""}
            rules={{ required: "Owner name is required" }}
          />
        </div>

        {/* Vehicle status select control */}
        <div className="mb-6 lg:mb-2">
          <SingleSelect
            label="Status"
            name="status"
            control={control}
            error={errors.status && errors.status.message}
            defaultvalue={
              props.data
                ? {
                    label: props.data.status,
                    value: props.data.status,
                  }
                : null
            }
            options={[
              { label: "in", value: "in" },
              { label: "out", value: "out" },
            ]}
            isClearable={true}
            placeholder="Select vehicle type"
            rules={{ required: "Vehicle type is required" }}
          />
        </div>

        {/* Owner address input control */}
        <div className="mb-6 lg:mb-2">
          <TextInput
            label="Vehicle owner address"
            name="owner_address"
            type="text"
            placeholder="Enter address"
            control={control}
            error={errors.owner_address && errors.owner_address.message}
            defaultvalue={props.data?.owner_address || ""}
            rules={{ required: "Owner address is required" }}
          />
        </div>

        {/* entry_time input control */}
        <div className="mb-6 lg:mb-2">
          <DateInput
            label="Entry time"
            name="entry_time"
            placeholder="Select time"
            control={control}
            error={errors.entry_time && errors.entry_time.message}
            defaultvalue={props.data?.entry_time || ""}
            rules={{ required: "Entry time required." }}
          />
        </div>
      </div>

      {/* Submit button */}
      <div className="text-right pt-4">
        <PrimaryButton type="submit" disabled={props.loading}>
          {props.loading ? "Loading..." : "Submit"}
        </PrimaryButton>
      </div>
    </form>
  );
};
