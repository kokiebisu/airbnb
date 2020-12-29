import { useState } from "react";
import { useFormik } from "formik";
import Router from "next/router";

/** contexts */
import { useAuthDispatch, useAuthState } from "@context/auth";

/** styles **/
import space from "@styles/space.module.scss";
import font from "@styles/font.module.scss";
import layout from "@styles/layout.module.scss";

/** components */
import { Input } from "@input/input.component";
import { Button } from "@button/button.component";
import { Bullet } from "@bullet/bullet.component";
import { Card } from "@card/card.component";

/** Helper */
import { validateLogin as validate } from "@helper/auth";

/** hooks */
import { useFetch } from "@hooks/useFetch";

/** stories */
import { primary, underline } from "@button/button.stories";

/**
 * Renders the login template component
 */
export const LoginTemplate: React.FC<{}> = () => {
  const authState = useAuthState();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("pending");
  const authDispatch = useAuthDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      const doFetch = useFetch({
        url: "/api/users/signin",
        method: "post",
        body: values,
        triggerLoading(state) {
          setLoading(state);
        },
        onSuccess() {
          Router.reload();
        },
        onFail() {
          setStatus("fail");
        },
      });
      doFetch();
    },
  });

  const switchAuth = () => {
    if (authState.title === "Log in") {
      return authDispatch({ type: "auth_signup" });
    }
    return authDispatch({ type: "auth_login" });
  };

  const switchBack = () => {
    return authDispatch({ type: "auth_login" });
  };

  const redirectTo = () => {
    return authDispatch({ type: "forgot_password" });
  };

  return (
    <div className={[space["p--24"]].join(" ")}>
      {status === "fail" && (
        <div className={[space["m-b--16"]].join(" ")}>
          <Card variant="again" />
        </div>
      )}
      <form onSubmit={formik.handleSubmit}>
        <div>
          <div>
            <Input
              variant="email"
              direction="bottom"
              handleChange={formik.handleChange}
              value={formik.values.email}
              errors={formik.errors.email !== undefined}
            />
            <Input
              variant="password"
              direction="top"
              handleChange={formik.handleChange}
              value={formik.values.password}
              errors={formik.errors.password !== undefined}
            />
          </div>
          <div>
            {formik.errors.email !== undefined && (
              <div className={[space["m-t--6"]].join(" ")}>
                <Bullet variant="required" message={formik.errors.email} />
              </div>
            )}
          </div>
          <div>
            {formik.errors.password !== undefined && (
              <div className={[space["m-t--6"]].join(" ")}>
                <Bullet variant="required" message={formik.errors.password} />
              </div>
            )}
          </div>
          {status === "success" && (
            <div className={[space["m-t--16"]].join(" ")}>
              <Card variant="set" />
            </div>
          )}
        </div>
        <div className={[space["m-v--16"]].join(" ")}>
          <Button {...primary.args} title="Log in" loading={loading} block />
        </div>
        <div className={[space["m-v--16"]].join(" ")}>
          <Button
            {...underline.args}
            title="Forgot password?"
            onClick={redirectTo}
          />
        </div>
        <div className={[space["m-v--16"]].join(" ")}>
          <Button
            {...underline.args}
            title="More login options"
            onClick={switchBack}
          />
        </div>
        <div className={[layout["flex"]].join(" ")}>
          <p className={[font["size--14"], space["m-r--8"]].join(" ")}>
            Don't have an account?
          </p>
          <Button {...underline.args} title="Sign up" onClick={switchAuth} />
        </div>
      </form>
    </div>
  );
};