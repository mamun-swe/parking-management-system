import { VehicleForm } from "components/form/vehicle.form";
import { getVehicles } from "utils/helper";
import { setVehicle } from "../../utils/helper";
import { Toastify } from "components/toastify";

export const VehicleStore: React.FC = (): JSX.Element => {
  /* handle submit */
  const handleSubmit = (data: any) => {
    const items = [];
    const existing = getVehicles();

    if (existing) {
      items.push(existing);
      items.push(data);
    } else {
      items.push(data);
    }

    setVehicle(items);
    Toastify.Success("Vehicle added");
  };

  return (
    <div className="container mx-auto py-20">
      <p className="text-red-400">Store vehicle</p>
      <VehicleForm
        data={null}
        loading={false}
        onSubmit={(data) => handleSubmit(data)}
      />
    </div>
  );
};
