import { Container } from "@components/containers/Container";
import { DataGrid } from "@mui/x-data-grid";
import { useMail } from "@hooks/useMail";
import { useTime } from "@hooks/useTimeline";
import { useWindowDimensions } from "@hooks/useWindowDimensions";
import { WorkingOn } from "@components/state/WorkingOn";
import React from "react";
import { useAuth } from "@hooks/useAuth";

const Content = () => {
  const { mails } = useMail();
  const { width } = useWindowDimensions();
  const ref = React.useRef();

  return (
    <Container width="95%" mt={4} mb={4}>
      <div style={{ height: "100%", width: "100%" }}>
        <DataGrid
          ref={ref}
          onRowClick={(data) => window.open(`https://mail.google.com/mail/u/0/#inbox/${mails[data.id].id}`)}
          rows={mails?.map((mail, i) => ({
            id: i,
            provider: mail.messages[0].payload?.headers
              .find((mail) => mail.name == "From")
              .value.substr(
                0,
                String(mail.messages[0].payload?.headers.find((mail) => mail.name == "From").value).indexOf("<") == -1
                  ? String(mail.messages[0].payload?.headers.find((mail) => mail.name == "From").value).indexOf("@")
                  : String(mail.messages[0].payload?.headers.find((mail) => mail.name == "From").value).indexOf("<")
              )
              .replaceAll('"', ""),
            subject: mail.messages[0].payload?.headers.find((mail) => mail.name == "Subject").value,
            date: useTime(new Date(Number(mail.messages[0].internalDate))),
            mail: mail.messages[0].snippet
          }))}
          columns={[
            { field: "provider", headerName: "Provider", width: width / 6 },
            { field: "subject", headerName: "Subject", width: width / 6 },
            { field: "mail", headerName: "Message", width: (width / 6) * 3 },
            { field: "date", headerName: "Date", width: 150 }
          ]}
          pageSize={15}
          rowsPerPageOptions={[2]}
          checkboxSelection
        />
      </div>
    </Container>
  );
};

export const Mail = () => {
  const { currentUser } = useAuth();

  return currentUser.modules.gmail.state ? <Content /> : <WorkingOn />;
};
