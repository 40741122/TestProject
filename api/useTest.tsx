interface Equipment {
  id: number;
  name: string;
  status: string;
  mold_sn: string | null;
  dispatch_sn: string | null;
  dispatch_method: string | null;
  process_name: string | null;
}

interface ApiResponse {
  status: string;
  message: string;
  data: {
    equipments: Equipment[];
  };
}


export async function fetchData(): Promise<ApiResponse> {
  const response = await fetch('https://api.example.com/equipments', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      // 如果需要，這裡可以添加認證頭
    },
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data: ApiResponse = await response.json();
  return data;
}