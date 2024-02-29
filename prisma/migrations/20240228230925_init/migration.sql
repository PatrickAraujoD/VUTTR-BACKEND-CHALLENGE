-- CreateTable
CREATE TABLE "Tools" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Tools_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tags" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "toolsId" INTEGER NOT NULL,

    CONSTRAINT "Tags_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Tags" ADD CONSTRAINT "Tags_toolsId_fkey" FOREIGN KEY ("toolsId") REFERENCES "Tools"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
