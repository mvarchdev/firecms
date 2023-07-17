import React from "react";
import { Button, Entity, EntityValues, useSnackbarController } from "firecms";
import { Product } from "../types";

export function SampleProductsView({ entity, modifiedValues }: {
    entity?: Entity<Product>;
    modifiedValues?: EntityValues<Product>;
}) {

    const snackbarController = useSnackbarController();

    const onClick = (event: React.MouseEvent) => {
        snackbarController.open({
            type: "success",
            message: `Custom action for ${modifiedValues?.name}`
        });
    };

    const values = modifiedValues ?? {};

    return (
        <div className="flex w-full h-full">

            <div className="m-auto flex flex-col items-center justify-items-center">

                <div className="p-16">
                    <p>
                        This is an example of a custom view added
                        as a panel to an entity collection.
                    </p>
                    <p>
                        Values in the form:
                    </p>

                    {values && <p style={{
                        color: "#fff",
                        padding: "8px",
                        fontSize: ".85em",
                        fontFamily: "monospace",
                        borderRadius: "4px",
                        backgroundColor: "#4e482f"
                    }}>
                        {JSON.stringify(values, null, 2)}
                    </p>}

                </div>

                <Button onClick={onClick} color="primary">
                    Your action
                </Button>

            </div>
        </div>
    );

}
