import React from "react";
import Image from "next/image";

function CollectionList({ collections }) {
  console.log("React component", collections);
  return (
    <section className="w-full gap-4 md:gap-8 grid p-6 md:p-8 lg:p-12">
      <h2 className="whitespace-pre-wrap max-w-prose font-bold text-lead">
        Collections
      </h2>
      <div className="grid-flow-row grid gap-2 gap-y-6 md:gap-4 lg:gap-6 grid-cols-1 false  sm:grid-cols-3 false false">
        {collections.map((collection) => {
          return (
            <div key={collection.id}>
              <div className="grid gap-4">
                <Image
                  className="rounded shadow-border overflow-clip inline-block aspect-[5/4] md:aspect-[3/2] object-cover"
                  src={collection.image.src}
                  width={400}
                  height={400}
                />
                <h2 className="whitespace-pre-wrap max-w-prose font-medium text-copy">
                  {collection.title}
                </h2>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default CollectionList;
