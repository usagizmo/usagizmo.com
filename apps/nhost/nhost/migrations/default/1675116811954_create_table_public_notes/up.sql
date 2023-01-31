CREATE TABLE "public"."notes" ("path" text NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), "basename" text NOT NULL, "extension" text NOT NULL, "name" text NOT NULL, "size" integer NOT NULL, "content" text, "fileId" text, PRIMARY KEY ("path") );
CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_notes_updated_at"
BEFORE UPDATE ON "public"."notes"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_notes_updated_at" ON "public"."notes" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
