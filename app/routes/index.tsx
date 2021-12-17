import type { MetaFunction } from "remix";

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: "Index",
    description: "Welcome to remix!"
  };
};

// https://remix.run/guides/routing#index-routes
export default function Index() {

  return (
    <div className="remix__page">
      Index
    </div>
  );
}
