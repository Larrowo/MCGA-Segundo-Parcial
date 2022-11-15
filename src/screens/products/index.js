import React from "react";
import styles from "./products.module.css";
import SharedInput from "../../components/SharedInput/SharedInput";
import { useForm } from "react-hook-form";

const Products = () => {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className={styles.container}>
      <div>Products</div>
      <div>
        {/* <SharedInput name="inputEmail" type="text" placeholder="Email" />
                <SharedInput name="inputPassword" type="password" placeholder="Password" /> */}

        <form onSubmit={handleSubmit(onSubmit)}>
          <SharedInput type="text" placeholder="Email" name="email" />
          <SharedInput type="text" placeholder="Password" name="password" />

          <input type={"submit"} />
        </form>
      </div>
    </div>
  );
};

export default Products;
