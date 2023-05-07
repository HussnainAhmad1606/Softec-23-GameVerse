import React, {useState} from 'react'
import "flowbite";
import { Label, TextInput, Button, Textarea } from "flowbite-react";
export const AddReview = (params) => {

    const [name, setName] = useState("")
    const [rating, setRating] = useState("")
    const [comment, setComment] = useState("");
    
    const { slug } = params;


    const handleOnChange = (e) => {
        if (e.target.name == "name") {
            setName(e.target.value);
        }
        else if (e.target.name == "rating") {
            setRating(e.target.value);
        }
        else if (e.target.name == "comment") {
            setComment(e.target.value);
        }
    }


    const postReview = async(e) => {
 e.preventDefault();
  const data = {
    name: name,
    rating: rating,
    comment: comment,
    productSlug: slug,
    
  }
  // Default options are marked with *
  const response = await fetch(`http://localhost:3000/api/review/addReview`, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json();
    }
  return (
    <div className='my-4 w-[70%]' style={{
        margin: "auto"
    }}>
    <form className="flex justify-center flex-col gap-4">

    <h1>Add a Review</h1>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="name"
        value="Your name"
      />
    </div>
    <TextInput
      id="name"
      type="name"
      placeholder="Your Name..."
      name="name"
      required={true}
      onChange={handleOnChange}
      value={name}
    />
  </div>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="Rating"
        value="Your Rating (1-5):"
      />
    </div>
    <TextInput
      id="rating"
      type="number"
      required={true}
      name="rating"
      min={1}
      max={5}
      onChange={handleOnChange}
      value={rating}
    />
  </div>
 
  <div id="textarea">
  <div className="mb-2 block">
    <Label
      htmlFor="comment"
      value="Your message"
    />
  </div>
  <Textarea
    id="comment"
    placeholder="Leave a comment..."
    required={true}
    name='comment'
    rows={4}
    onChange={handleOnChange}
    value={comment}
  />
</div>
  <Button onClick={postReview} type="submit">
    Post Comment
  </Button>
</form>
</div>
  )
}
