interface IPacient {
    pacientId: string
    pacientName: string
    age: number
    gender: "Homem" | "Mulher" | "Outro"
    email: string
    phone: string
    address: {
      city: string
      street: string
    };
    status: "active" | "inactive" | "inTreatment";
    medicalHistory: {
      allergies?: string[]
      conditions?: string[]
      medications?: string[]
      observations?: string
    };
    appointmentsHistory: {
      appointmentId: string;
      date: Date;
      observations?: string;
    }[];
    healthPlan: {
      provider: string;
      planType: string;
      expirationDate: Date;
    };
    treatments: {
      treatmentsId: string;
      title: string;
      description?: string;
      value: number;
      medic?: string;
      startDate: Date;
      endDate?: Date;
      status: "completed" | "inProgress" | "planned";
    }[];
  }

  export type {IPacient}