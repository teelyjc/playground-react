import { Fragment, FunctionComponent } from "react";

export const LoadingScreen: FunctionComponent = () => {
  return (
    <Fragment>
      <div className="flex h-screen">
        <div className="m-auto">
          <h1 className="text-center">Loading..</h1>
          <p className="text-gray-500">
            This may take a few seconds, please don't close this page.
          </p>
        </div>
      </div>
    </Fragment>
  )
}
