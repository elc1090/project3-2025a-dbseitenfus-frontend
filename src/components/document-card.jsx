'use client'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { FileText, MoreVertical } from "lucide-react"

//Dropdown Menu


import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export default function DocumentCard({ document }) {

    return (
        <Card className="bg-stone-50">
            <CardHeader className="flex flex-row items-center justify-between">
                <FileText size={19} color="#3e9392" className="mr-3" />
                <CardTitle className="flex-1 px-2 text-sm truncate"> {document.name}</CardTitle>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="p-0 w-3 h-3">
                            <MoreVertical size={16} />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuCheckboxItem>
                            Abrir em nova aba
                        </DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem>
                            Editar
                        </DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem>
                            Excluir
                        </DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </CardHeader>
            <CardContent>
                <p className="line-clamp-2 bg-white h-[100px] p-1.5 text-xs">{document.text}</p>
            </CardContent>
            <CardFooter>
                <p className="text-xs">Criado por {document.owner.name} • {document.createdAt.toLocaleDateString()}</p>
            </CardFooter>
        </Card>
    )
}