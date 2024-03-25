import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Laptop } from "@/types";
import Image from "next/image";

export default async function AllLaptops() {
  const laptops: Laptop[] = await fetch(
    "https://laptopify-server.vercel.app/laptops",
    {
      cache: "no-store",
    },
  ).then((res) => res.json());

  return (
    <Table className="border shadow-md">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Sl No</TableHead>
          <TableHead>Model</TableHead>
          <TableHead>Brand</TableHead>
          <TableHead>Product Id</TableHead>
          <TableHead className="text-right">Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {laptops.map(({ model, image, brand, _id, price }, i) => (
          <TableRow key={_id}>
            <TableCell>{i + 1}</TableCell>
            <TableCell className="flex items-center gap-x-4 font-medium">
              <Image
                src={image}
                alt={model}
                height={50}
                width={50}
                className="rounded-md"
              />
              <span>{model}</span>
            </TableCell>
            <TableCell>{brand}</TableCell>
            <TableCell>{_id}</TableCell>
            <TableCell className="text-right">${price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
