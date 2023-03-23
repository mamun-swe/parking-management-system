import { PrimaryButton } from "components/button";
import { Link } from "react-router-dom";

export const Dashboard: React.FC = (): JSX.Element => {
  return (
    <div className="text-center py-20">
      <p className="text-red-400 mb-8">Dashboard</p>
      <Link to="/vehicle/create">
        <PrimaryButton type="button">Create Vehicle</PrimaryButton>
      </Link>
    </div>
  );
};
