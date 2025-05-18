'use client'
import { useEffect, useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import DocumentCard from "@/components/document-card"

function fetchDocuments() {
  return [
    {
      id: 1,
      name: "Document 1",
      text: "This is the first document. This document is just a test for the development process. I'm trying to understand the sizes and spaces of the components, so, that's why I'm writing this text. It's crazy, because the Copilot is guessing what I'm thinking and suggesting.",
      createdAt: new Date(),
      updatedAt: new Date(),
      owner: {
        userId: 1,
        name: "Daniel Seitenfus"
      }
    },
    {
      id: 2,
      name: "Document 2",
      text: "This is the second document.",
      createdAt: new Date(),
      updatedAt: new Date(),
      owner: {
        userId: 1,
        name: "Daniel Seitenfus"
      }
    },
    {
      id: 3,
      name: "Document 3",
      text: "This is the third document.",
      createdAt: new Date(),
      updatedAt: new Date(),
      owner: {
        userId: 1,
        name: "Daniel Seitenfus"
      }
    },
    {
      id: 4,
      name: "Document 4",
      text: "This is the fourth document.",
      createdAt: new Date(),
      updatedAt: new Date(),
      owner: {
        userId: 1,
        name: "Daniel Seitenfus"
      }
    },
    {
      id: 5,
      name: "Document 5",
      text: "This is the fifth document.",
      createdAt: new Date(),
      updatedAt: new Date(),
      owner: {
        userId: 1,
        name: "Daniel Seitenfus"
      }
    },
    {
      id: 6,
      name: "Document 6",
      text: "This is the sixth document.",
      createdAt: new Date(),
      updatedAt: new Date(),
      owner: {
        userId: 1,
        name: "Daniel Seitenfus"
      }
    },
    {
      id: 7,
      name: "Document 7",
      text: "This is the seventh document.",
      createdAt: new Date(),
      updatedAt: new Date(),
      owner: {
        userId: 1,
        name: "Daniel Seitenfus"
      }
    },
    {
      id: 8,
      name: "Document 8",
      text: "This is the eighth document.",
      createdAt: new Date(),
      updatedAt: new Date(),
      owner: {
        userId: 1,
        name: "Daniel Seitenfus"
      }
    }
  ]
}

export default function Home() {

  const [documents, setDocuments] = useState([])

  useEffect(() => {
    setDocuments(fetchDocuments())
  }, [])

  return (
    <div className="[--header-height:calc(theme(spacing.14))]">
      <SidebarProvider className="flex flex-col">
        <SiteHeader />
        <div className="flex flex-1">
          <AppSidebar />
          <SidebarInset>
            <div className="grid grid-cols-4 gap-4 p-3">
              {documents.map((document) => (
                <DocumentCard key={document.id} document={document} />
              ))}
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  )
}