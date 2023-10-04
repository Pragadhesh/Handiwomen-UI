export interface DailyTask {
    requestid: string;
    date: string;
    type: string;
    count: number;
    isApproved: boolean;
  }
  
  export interface Activity {
    id: number;
    name: string;
    email: string;
    age: number;
    dailyTasks: DailyTask[];
  }
  

  