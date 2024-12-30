const apiUrl = "https://opbento.edgexhq.tech/api/bento?n=Rahul%20Khandait&g=rahulkhandait-sde&x=rahulkhandait_&l=rahulkhandait&i=https%3A%2F%2Fi.postimg.cc%2FyYspc3wW%2FLogo-twitter.png&p=https%3A%2F%2Flinktr.ee%2Frahulkhandait&z=2a3d0";
interface BentoResponse {
  url: string;
}

const fetchBentoUrl = async (apiUrl: string): Promise<string> => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: BentoResponse = (await response.json()) as BentoResponse;
    return data.url;
  } catch (error) {
    console.error("Error fetching Bento URL:", error);
    throw error;
  }
};

// @ts-ignore
fetchBentoUrl(apiUrl);
