import React from "react";
import { useForm } from "react-hook-form";
import appService from "../../Components/App/Appservices/AppService";

export const EditComment = ( id, title, num_stars, content) => {
    console.log("item er ", id)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm({ defaultValues: { id, title, num_stars, content } });
      const onSubmit = async (data) => {
        const postData = {
          id: data.id,
          title: data.title,
          content: data.comment,
          num_stars: data.stars,
          active: true,
        };
        try {
          const response = await appService.Update(
            "reviews",
            postData
          );
          if (response.status) {
            console.log(response.data);
            reset();
          }
        } catch (error) {
          console.error(error);
        }
      };
    
  return (
    <tr className="edit">
      <td>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="hidden" {...register("id")} id="id" value={id} />
          <textarea
            {...register('comment', { required: true })}
            rows={3}
            cols={30}
            defaultValue={content}

          />
          {errors.comment && <span>This field is required</span>}
          <br />
          <input
            {...register('title', { required: true })}
            type="text"
            placeholder="Titel"
            defaultValue={title}
          />
          {errors.title && <span>This field is required</span>}
          <br />
          <input
            {...register('stars', { required: true })}
            type="number"
            min="1"
            max="5"
            placeholder="Rating"
            defaultValue={num_stars}
          />
          {errors.stars && <span>This field is required</span>}
          <br />
          <input className="submit" type="submit" value="Send" />
        </form>
      </td>
    </tr>
  );
};
