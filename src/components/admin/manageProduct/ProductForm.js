import React from "react";
import TextInput from "../../common/TextInput";

const ProductForm = ({
  product,
  products,
  onSave,
  onChange,
  saving = false,
  errors = {},
}) => {
  console.log("product", product);
  return (
    <div className="container-fluid" style={{ width: "80%" }}>
      <form onSubmit={onSave}>
        <h2>{product.id ? "Edit" : "Add"} Product</h2>
        {errors.onSave && (
          <div className="alert alert-danger" role="alert">
            {errors.onSave}
          </div>
        )}
        <TextInput
          name="title"
          label="Title"
          value={product.title}
          onChange={onChange}
          error={errors.title}
        />
        <TextInput
          name="description"
          label="Description"
          value={product.description}
          onChange={onChange}
          error={errors.description}
        />
        <div className="form-group">
          <label htmlFor="size">Size</label>
          <div class="input-group-prepend">
            <div style={{ width: "10%" }} class="input-group mb-2">
              <div class="input-group-prepend">
                <div class="input-group-text">
                  <input
                    type="checkbox"
                    aria-label="Checkbox for following text input"
                  />
                </div>
              </div>
              <span className="form-control"> XX </span>
            </div>
            <div style={{ width: "10%" }} class="input-group mb-2">
              <div class="input-group-prepend">
                <div class="input-group-text">
                  <input
                    type="checkbox"
                    aria-label="Checkbox for following text input"
                  />
                </div>
              </div>
              <span className="form-control"> XX </span>
            </div>
          </div>
        </div>

        <button type="submit" disabled={saving} className="btn btn-primary">
          {saving ? "Saving..." : "Save"}
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
