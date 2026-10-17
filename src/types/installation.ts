export type Feature = "students" | "classes" | "workouts" | "results";
export interface InstallationConfig {
  id: string;
  name: string;
  tagline: string;
  logo: string;
  primaryColor: string;
  timezone: string;
  units: "kg" | "lb";
  features: Record<Feature, boolean>;
}
