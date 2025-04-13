import { useRouter } from "next/router";

function ServiceType() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Service Type: {id}</h1>
      {/* Add your service type details here */}
    </div>
  );
}
