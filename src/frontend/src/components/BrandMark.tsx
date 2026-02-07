interface BrandMarkProps {
  className?: string;
}

export function BrandMark({ className = '' }: BrandMarkProps) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <img
        src="/assets/generated/brand-3d-block.dim_1600x400.png"
        alt="MJ Steam Ironing and Dry Cleaning Services"
        className="h-10 md:h-12 w-auto object-contain"
      />
      <p className="text-xs md:text-sm text-muted-foreground leading-tight">
        The one-stop shop for all your daily clean needs
      </p>
    </div>
  );
}
