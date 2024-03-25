import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Laptop } from "@/types";
import Image from "next/image";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

export default async function AllLaptops() {
  const laptops: Laptop[] = await fetch("http://localhost:8080/laptops", {
    cache: "no-store",
  }).then((res) => res.json());

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
