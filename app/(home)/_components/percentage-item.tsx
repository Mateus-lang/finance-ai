import { ReactNode } from "react";

interface PercentageItemProps {
  title: string;
  value: number;
  icon: ReactNode;
}

const PercentageItem = ({ icon, title, value }: PercentageItemProps) => {
  return (
    <div className="flex items-center justify-between">
      {/* Icone */}
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-white/5 p-2">{icon}</div>
        <p className="text-sm text-muted-foreground">{title}</p>
      </div>

      <p className="text-sm font-bold">{value}%</p>
    </div>
  );
};

export default PercentageItem;
