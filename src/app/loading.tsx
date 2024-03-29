import * as LoadingComponent from "@/app/components/Loading";
export default function Loading() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <LoadingComponent.default />
    </div>
  );
}
