const apiUrl = "https://opbento.edgexhq.tech/api/bento?n=Rahul%20Khandait&g=rahulkhandait-sde&x=rahulkhandait_&l=rahulkhandait&i=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F90828823%3Fs%3D400%26u%3D52b51c0e9d9e762889711376201539039db93135%26v%3D4&p=https%3A%2F%2Flinktr.ee%2Frahulkhandait&z=1138d";
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
