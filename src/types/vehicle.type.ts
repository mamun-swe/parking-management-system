export interface IVehicle {
  license_number: string;
  vehicle_type: "Microbus" | "Car" | "Truck";
  owner_name: string;
  owner_phone: string;
  status: "in" | "out";
  owner_address: string;
  entry_time: string;
  entry_date: string;
  exit_time: string;
  exit_date: string;
  parking_charge: number;
}
