import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function DeleteMovieDialog({
  open,
  movie,
  onConfirm,
  onCancel,
  isLoading,
}) {
  return (
    <Dialog open={open} onOpenChange={onCancel}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Movie</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete the movie <b>{movie.title}</b>? This
            action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={onCancel} disabled={isLoading}>
            Cancel
          </Button>
          <Button
            variant="destructive"
            onClick={onConfirm}
            disabled={isLoading}
          >
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
