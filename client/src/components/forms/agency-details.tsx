"use client";
import { Agency } from "@prisma/client";
import { useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";
// import { NumberInput } from "@tremor/react";
// import { v4 } from "uuid";

import { useRouter } from "next/navigation";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

import * as z from "zod";
// import FileUpload from "../global/file-upload";
import { Input } from "../ui/input";
import { Switch } from "../ui/switch";
import {
  deleteAgency,
  initUser,
  saveActivityLogsNotification,
  updateAgencyDetails,
  upsertAgency,
} from "@/lib/queries";
import { Button } from "../ui/button";
import { useToast } from "@/hooks/use-toast";
// import Loading from "../global/loading";
type Props = {
  data?: Partial<Agency>;
};
const AgencyDetails = ({ data }: Props) => {
const {toast}=useToast()
  return (
    <AlertDialog>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Agency Information</CardTitle>
          <CardDescription>
            Lets create an agency for you business. You can edit agency settings
            later from the agency settings tab.
          </CardDescription>
        </CardHeader>
      </Card>
    </AlertDialog>
  );
};

export default AgencyDetails;
