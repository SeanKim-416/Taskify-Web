export type Invited = {
  invitations: Array<{
    id: number;
    inviter: {
      id: number;
      email: string;
      nickname: string;
    };
    teamId: string;
    dashboard: {
      id: number;
      title: string;
    };
    invitee: {
      id: number;
      email: string;
      nickname: string;
    };
    inviteAccepted: boolean;
    createdAt: string;
    updatedAt: string;
  }>;
  cursorId: number;
} | null;
