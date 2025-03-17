"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { EditRecordForm } from "./edit-record-form";
import { DeleteRecordDialog } from "./delete-record-dialog";

export function DataTable() {
  const [records, setRecords] = useState([
    { id: "1", name: "Hangover", email: "2009", role: "Action/Comedy" },
    { id: "2", name: "X-Men", email: "2000", role: "Action/Adventure" },
    { id: "3", name: "King Kong", email: "2005", role: "Action/Adventure" },
  ]);
  const [editingRecord, setEditingRecord] = useState(null);
  const [deletingRecord, setDeletingRecord] = useState(null);
  const router = useRouter();

  const handleEdit = (record) => {
    setEditingRecord(record);
  };

  const handleDelete = (record) => {
    setDeletingRecord(record);
  };

  const handleEditSubmit = (updatedRecord) => {
    setRecords(
      records.map((r) => (r.id === updatedRecord.id ? updatedRecord : r))
    );
    setEditingRecord(null);
    router.refresh();
  };

  const handleDeleteConfirm = (id) => {
    setRecords(records.filter((r) => r.id !== id));
    setDeletingRecord(null);
    router.refresh();
  };

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Year</TableHead>
            <TableHead>Genres</TableHead>
            <TableHead className="text-end">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {records.map((record) => (
            <TableRow key={record.id}>
              <TableCell>{record.name}</TableCell>
              <TableCell>{record.email}</TableCell>
              <TableCell>{record.role}</TableCell>
              <TableCell className="flex justify-end">
                <Button
                  variant="outline"
                  size="sm"
                  className="mr-2"
                  onClick={() => handleEdit(record)}
                >
                  Edit
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => handleDelete(record)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {editingRecord && (
        <EditRecordForm
          record={editingRecord}
          onSubmit={handleEditSubmit}
          onCancel={() => setEditingRecord(null)}
        />
      )}
      {deletingRecord && (
        <DeleteRecordDialog
          record={deletingRecord}
          onConfirm={handleDeleteConfirm}
          onCancel={() => setDeletingRecord(null)}
        />
      )}
    </div>
  );
}
