import useSWR from "swr";
import { useEffect, useState } from "react";
import httpService from "../services/httpService";
import { apiErrorMessage } from "./../utils/handleAPIErrors";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

function useData(token) {
  const initialState = { data: { media: [], blog: [] } };
  const router = useRouter();
  const [data, setData] = useState(null);

  const fetcher = async (url) => {
    try {
      let data = await httpService.get(url);
      data = await data.data;
      return data;
    } catch (error) {
      const message = apiErrorMessage(error);
      toast.error(message);
    }
  };

  const {
    data: allData,
    error,
    mutate,
  } = useSWR(token ? `${backendUrl}/insights` : null, fetcher);

  useEffect(() => {
    if (allData) setData(allData);
    console.log(allData);
  }, [allData]);

  return {
    allData: data || initialState,
    isLoading: !error && !data,
    isEmpty: !data?.data,
    isError: error,
    mutate,
  };
}

export { useData };
