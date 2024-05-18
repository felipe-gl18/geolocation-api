-- CreateTable
CREATE TABLE "locations" (
    "id" SERIAL NOT NULL,
    "address" VARCHAR(250) NOT NULL,
    "lat" VARCHAR(20) NOT NULL,
    "long" VARCHAR(20) NOT NULL,
    "createdat" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "state" VARCHAR NOT NULL,
    "city" VARCHAR NOT NULL,

    CONSTRAINT "locations_pkey" PRIMARY KEY ("id")
);

