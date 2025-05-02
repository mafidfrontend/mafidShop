"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type PaginationControlsProps = {
  currentPage: number;
  totalPages: number;
  hrefBuilder: (page: number) => string;
};

const PaginationControls = ({ currentPage, totalPages, hrefBuilder }: PaginationControlsProps) => {
  return (
    <div className="flex justify-center items-center gap-2 mt-6 mb-6">
      <Button asChild variant="outline" disabled={currentPage === 1}>
        <Link href={hrefBuilder(currentPage - 1)}>⬅ Oldingi</Link>
      </Button>

      <span className="text-lg font-semibold">
        {currentPage} / {totalPages}
      </span>

      <Button asChild variant="outline" disabled={currentPage === totalPages}>
        <Link href={hrefBuilder(currentPage + 1)}>Keyingi ➡</Link>
      </Button>
    </div>
  );
};

export default PaginationControls;