"use client";
import { Button } from "@/components/ui/button";

type PaginationControlsProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const PaginationControls = ({ currentPage, totalPages, onPageChange }: PaginationControlsProps) => {
  return (
    <div className="flex justify-center items-center gap-2 mt-6 mb-6">
      <Button
        variant="outline"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        ⬅ Oldingi
      </Button>
      <span className="text-lg font-semibold">
        {currentPage} / {totalPages}
      </span>
      <Button
        variant="outline"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Keyingi ➡
      </Button>
    </div>
  );
};

export default PaginationControls;