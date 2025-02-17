import supabase from "@/utils/supabase";
import { useQueryClient } from "@tanstack/react-query";
import React from "react";

const useSubscription = () => {
  const queryClient = useQueryClient();
  React.useEffect(() => {
    const channels = supabase
      .channel("custom-all-channel")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "schedule" },
        (payload) => {
          console.log("Change received!", payload);
          queryClient.invalidateQueries({ queryKey: ["schedule"] });
        }
      )
      .subscribe();

    return () => {
      channels.unsubscribe();
    };
  }, []);
};

export default useSubscription;
