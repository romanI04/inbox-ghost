"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"

interface DraftApprovalModalProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  draftText: string
  onApprove: () => void
  onReject: () => void
  onEdit: () => void
}

export function DraftApprovalModal({
  open,
  onOpenChange,
  draftText,
  onApprove,
  onReject,
  onEdit,
}: DraftApprovalModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Draft Approval</DialogTitle>
        </DialogHeader>

        <div className="py-4">
          <Textarea value={draftText} readOnly className="min-h-[200px] resize-none" placeholder="No draft content" />
        </div>

        <DialogFooter className="flex gap-2 sm:gap-2">
          <Button
            variant="outline"
            onClick={onReject}
            className="text-destructive hover:text-destructive bg-transparent"
          >
            Reject
          </Button>
          <Button variant="outline" onClick={onEdit}>
            Edit
          </Button>
          <Button onClick={onApprove}>Approve</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
