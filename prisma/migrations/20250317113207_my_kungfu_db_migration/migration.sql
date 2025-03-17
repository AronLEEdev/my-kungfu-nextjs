-- CreateTable
CREATE TABLE "Blog" (
    "id" TEXT NOT NULL,
    "router" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,
    "tags" TEXT[],

    CONSTRAINT "Blog_pkey" PRIMARY KEY ("id")
);
