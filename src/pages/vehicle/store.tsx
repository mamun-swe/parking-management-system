import { VehicleForm } from "components/form/vehicle.form";

export const VehicleStore: React.FC = (): JSX.Element => {
  return (
    <div className="container mx-auto py-20">
      <p className="text-red-400">Store vehicle</p>
      <VehicleForm
        data={null}
        loading={false}
        onSubmit={(data) => console.log(data)}
      />
    </div>
  );
};
